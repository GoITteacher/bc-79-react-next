import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../globalApi";
import { AxiosError } from "axios";
import { getAxiosErrorPayload } from "../_helpers/requestHelpers";

export const GET = async (req: NextRequest) => {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const res = await globalApi.get("/public/books", { params });
    return NextResponse.json(res.data);
  } catch (err) {
    const error = getAxiosErrorPayload(err);
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
};
