const router = require("express").Router();
const {
  getAllUser, getUserById, createUser, updateUser, deleteUser, addReaction, removeReaction,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUser).post(createUser);
router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
router.route("/:userId/reactions").post(addReaction);
router.route("/:userId/reactions/:reactionId").delete(removeReaction);

module.exports = router;