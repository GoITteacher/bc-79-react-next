import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await axios.get(
    "https://drinkify.b.goit.study/api/v1/cocktails/?r=1"
  );
  return NextResponse.json(res.data);
};
