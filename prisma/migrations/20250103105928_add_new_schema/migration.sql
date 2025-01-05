-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "info" TEXT,
    "contactNumber" INTEGER,
    "meetingLink" TEXT NOT NULL,
    "BookingDate" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_id_key" ON "Booking"("id");
