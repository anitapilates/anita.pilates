import { NextResponse } from "next/server";

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID?.trim() || "UCvmOK8MkYb9VTjzpC2PX8SA";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const controllerWithTimeout = (ms: number) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  return { controller, timeout };
};

function parseLatestFromFeed(xml: string) {
  try {
    const idMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<title>([^<]+)<\/title>/g);
    const publishedMatch = xml.match(/<published>([^<]+)<\/published>/);
    const videoId = idMatch ? idMatch[1] : null;
    const title =
      titleMatch && titleMatch.length > 1
        ? titleMatch[1].replace(/<\/?title>/g, "")
        : null;
    const published = publishedMatch ? publishedMatch[1] : null;
    return { videoId, title, published };
  } catch (e: any) {
    return { videoId: null, title: null, published: null, debug: { error: e?.message ?? "parse error" } };
  }
}

export const revalidate = 900; // 15 min

export async function GET() {
  const { controller, timeout } = controllerWithTimeout(8000);
  try {
    const res = await fetch(FEED_URL, {
      signal: controller.signal,
      cache: "no-store",
    });
    const body = await res.text();
    if (!res.ok) {
      return NextResponse.json({
        videoId: null,
        title: null,
        published: null,
        debug: {
          status: res.status,
          contentType: res.headers.get("content-type"),
          snippet: body.slice(0, 200),
        },
      });
    }
    const latest = parseLatestFromFeed(body);
    return NextResponse.json(latest);
  } catch (err: any) {
    return NextResponse.json({
      videoId: null,
      title: null,
      published: null,
      debug: { error: err?.message ?? "fetch error" },
    });
  } finally {
    clearTimeout(timeout);
  }
}
