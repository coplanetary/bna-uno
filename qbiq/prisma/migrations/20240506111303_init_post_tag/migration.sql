-- CreateTable
CREATE TABLE "blog_post_tag_relations" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "blog_post_tag_relations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_post_tag_relations_postId_tagId_key" ON "blog_post_tag_relations"("postId", "tagId");

-- AddForeignKey
ALTER TABLE "blog_post_tag_relations" ADD CONSTRAINT "blog_post_tag_relations_postId_fkey" FOREIGN KEY ("postId") REFERENCES "blog_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_post_tag_relations" ADD CONSTRAINT "blog_post_tag_relations_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "blog_post_tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
