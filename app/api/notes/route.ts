import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../globalApi";
import { getAuthHeaders, getAxiosErrorPayload } from "../_helpers/requestHelpers";

export const POST = async (request: NextRequest) => {
  const headers = await getAuthHeaders();

  if (!headers) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );
  }

  try {
    const payload = await request.json();
    const res = await globalApi.post("/notes", payload, { headers });

    return NextResponse.json(res.data, {
      status: res.status,
    });
  } catch (error) {
    const axiosPayload = getAxiosErrorPayload(error);
    return NextResponse.json(
      { error: axiosPayload.message },
      {
        status: axiosPayload.status,
      }
    );
  }
};
