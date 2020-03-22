import express from "express";
import { debugHand } from "../cards/debug";
import { debugClearAll, debugViewDatabase } from "../firebase/db/debug";
import { debugCreateTable, debugGetTable } from "../table/debug";
import { debugSitAtTAble } from "../player/debug";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/debug/hands", (req, res) => {
  res.send({ response: debugHand() }).status(200);
});

router.get("/debug/db", debugViewDatabase);

router.get("/debug/db/clear", debugClearAll);

/**
 * Table debug endpoints.
 */
router.get("/debug/table/create", debugCreateTable);
router.get("/debug/table", debugGetTable);

/**
 * Player debug endpoints.
 */
router.get("/debug/player/sitAtTable", debugSitAtTAble);

export default router;
