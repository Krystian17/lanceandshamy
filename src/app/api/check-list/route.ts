import { ValidListType } from "@/types/valid-list";

export async function POST(request: Request) {
  const method = request.method;
  const data = await request.json();

  if (method === "POST") {
    const res = await fetch(
      "https://sheetdb.io/api/v1/6r0gmeqr0tksx?sheet=Guest+Names"
    );
    const checklist: ValidListType = await res.json();

    if (checklist.find((item) => item.User === data.name.toLowerCase())) {
      return Response.json(
        {
          status: `User found`,
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          status: `User not found`,
        },
        { status: 404 }
      );
    }
  }
}
