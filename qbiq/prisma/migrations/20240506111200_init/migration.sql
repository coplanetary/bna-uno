-- CreateTable
CREATE TABLE "blog_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "context" JSONB NOT NULL,
    "authorId" TEXT NOT NULL,
    "spaceTimeCoordinatesId" TEXT NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_post_tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descriptor" TEXT,

    CONSTRAINT "blog_post_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_post_authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "blog_post_authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "space_time_coordinates" (
    "id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "startTime" DOUBLE PRECISION NOT NULL,
    "pauseTime" DOUBLE PRECISION,
    "stopTime" DOUBLE PRECISION NOT NULL,
    "timezone" TEXT NOT NULL,
    "blogPostId" UUID NOT NULL,

    CONSTRAINT "space_time_coordinates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_spaceTimeCoordinatesId_key" ON "blog_posts"("spaceTimeCoordinatesId");

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "blog_post_authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_spaceTimeCoordinatesId_fkey" FOREIGN KEY ("spaceTimeCoordinatesId") REFERENCES "space_time_coordinates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
