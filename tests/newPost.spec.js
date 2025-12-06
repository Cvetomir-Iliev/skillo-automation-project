
import { test, expect } from "./fixtures/auth.js";
import path from "path";


const IMAGE_PATH = path.resolve("./test-data/gaming.jpg");

test.describe("New Post", () => {
  test("Positive: create a new post with image and caption", async ({
    loggedInPage,
    newPostPage,
    homePage,
  }) => {
    // loggedInPage ensures we are already logged in (from the fixture)
    await newPostPage.goto();

    await newPostPage.createPost({
      caption: "My gaming post",
      imageRelativePath: IMAGE_PATH,
    });

    await homePage.assertLoggedIn();
  });

  test("Negative: caption is required", async ({
    loggedInPage,
    newPostPage,
  }) => {
    await newPostPage.goto();

    await newPostPage.createPost({
      caption: "", // explicitly empty
      imageRelativePath: IMAGE_PATH, // valid image
    });

    await newPostPage.expectError("caption"); // case-insensitive
  });

  test("Negative: image is required", async ({ loggedInPage, newPostPage }) => {
    await newPostPage.goto();

    await newPostPage.createPost({
      caption: "Post without image",
      // no imageRelativePath on purpose
    });

    await newPostPage.expectError("image"); // case-insensitive
  });
});
