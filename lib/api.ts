interface FetcherProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  json?: boolean;
}

interface EmailData {
  subject: string;
  name: string;
  email: string;
  message: string;
}

export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: FetcherProps) => {
  try {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (json) {
      const data = await res.json();
      return data;
    }
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong");
  }
};

export const sendEmail = (data: EmailData) =>
  fetcher({
    url: "/api/email",
    method: "POST",
    body: data,
  });
