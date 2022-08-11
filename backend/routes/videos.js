import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  randomVideos,
  subscribedVideos,
  trendVideos,
  updateVideo,
  getByTags,
  search,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// CREATE A VIDEO
router.post("/", verifyToken, addVideo);

// UPDATE A VIDEO
router.put("/:id", verifyToken, updateVideo);

// DELETE A VIDEO
router.delete("/:id", verifyToken, deleteVideo);

// GET A VIDEO
router.get("/find/:id", verifyToken, getVideo);

// VIEWS OF VIDEO
router.put("/view/:id", addView);

// TREND VIDEO
router.get("/trend", trendVideos);

// RANDOM VIDEO
router.get("/random", randomVideos);

// SUBSCRIBED VIDEO
router.get("/sub", verifyToken, subscribedVideos);

// GET BY TAGS
router.get("/tags", getByTags);

// GET BY SEARCH
router.get("/search", search);

export default router;
