import { PrismaClient } from "@prisma/client";

export function client(): PrismaClient {
  return new PrismaClient();
}
