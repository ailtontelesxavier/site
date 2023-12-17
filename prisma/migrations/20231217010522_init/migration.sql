-- CreateTable
CREATE TABLE "Newletter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "optOut" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Newletter_pkey" PRIMARY KEY ("id")
);
