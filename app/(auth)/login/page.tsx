"use client";

import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { FaGithub } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { LogOutIcon } from "lucide-react";
import { Divider } from "@heroui/react";

import { handleLogin, handleLogout } from "./handle-auth";

import { siteConfig } from "@/config/site";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center">
      <Card className="p-4">
        <CardHeader className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Login to {siteConfig.name}</h2>
          <small className="text-sm text-slate-500">
            Please use your Github account to continue.
          </small>
        </CardHeader>
        <Divider className="mb-4" />
        <div>
          <Button
            className="w-full"
            color="secondary"
            disabled={!!session}
            size="lg"
            variant="shadow"
            onPress={handleLogin}
          >
            <FaGithub />
            Login with Github
          </Button>
          {!!session && (
            <div className="p-2">
              <p>You are already logged in</p>
            </div>
          )}
        </div>
        {!!session && (
          <>
            <Divider className="mt-4" />
            <CardFooter>
              <Button className="w-full" size="lg" onPress={handleLogout}>
                <LogOutIcon />
                Sign out
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
