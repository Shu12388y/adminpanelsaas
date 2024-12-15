-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "techStack" TEXT[],
    "features" TEXT[],
    "image" TEXT NOT NULL,
    "deployLink" TEXT NOT NULL,
    "productLink" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
