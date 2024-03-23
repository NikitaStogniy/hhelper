"use client";
import Link from "next/link";
import { TelegramProvider, useTelegram } from "./lib/TelegramProvider";

const Home = () => {
  const { user, webApp } = useTelegram();
  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user?.username}</h1>
          User data:
          <pre>{JSON.stringify(user, null, 2)}</pre>
          Eniter Web App data:
          <pre>{JSON.stringify(webApp, null, 2)}</pre>
          <Link
            href={`${process.env.NEXT_PUBLIC_HH_AUTH_URL}${process.env.NEXT_PUBLIC_HH_CLIENT}`}
          >
            Login
          </Link>
          <button
            onClick={() => {
              webApp?.sendData("hello from web app");
            }}
          >
            Send data to web app
          </button>
        </div>
      ) : (
        <div>Make sure web app is opened from telegram client</div>
      )}
    </div>
  );
};

export default function WithTelegramProvider() {
  return (
    <TelegramProvider>
      <Home />
    </TelegramProvider>
  );
}
