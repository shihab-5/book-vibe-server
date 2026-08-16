declare const router: import("express-serve-static-core").Router;
/**
 * PATCH /categories/:id
 *
 * Update category information
 *
 * Path Parameters:
 * - id: Category ID (UUID)
 *
 * Expected Request Body:
 * {
 *   "name": "Updated Category Name"
 * }
 *
 * Returns: Updated category object
 */
/**
 * DELETE /categories/:id
 *
 * Delete a category (soft delete - marks as deleted without removing from DB)
 *
 * Path Parameters:
 * - id: Category ID (UUID)
 *
 * Query Parameters:
 * - permanent: boolean (default: false) - Permanently delete from database
 *
 * Returns: Success message
 */
export default router;
//# sourceMappingURL=categories.d.ts.map