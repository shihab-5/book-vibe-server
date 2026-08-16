import { Router, Request, Response } from "express";
import prisma from "../lib/prisma";

const router=Router();


router.post("/", async (req: Request, res: Response) => {
  try {
    const {
      bookName,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing,
    } = req.body;

    // Validate required fields
    if (
      !bookName ||
      !author ||
      !totalPages ||
      rating === undefined ||
      !category ||
      !publisher ||
      !yearOfPublishing
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Book name, author, total pages, rating, category, publisher, and year of publishing are required",
      });
    }

    // Validate total pages
    if (totalPages <= 0) {
      return res.status(400).json({
        success: false,
        message: "Total pages must be greater than 0",
      });
    }

    // Validate rating
    if (rating < 0 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 0 and 5",
      });
    }

    // Validate year
    if (yearOfPublishing <= 0) {
      return res.status(400).json({
        success: false,
        message: "Year of publishing must be valid",
      });
    }

    // Create book
    const newBook = await prisma.book.create({
      data: {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        // `category` in the request is a string (category name). Connect the relation by unique `name`.
category: {
  connectOrCreate: {
    where: { name: category },
    create: { name: category },
  },
},        tags: tags || [],
        publisher,
        yearOfPublishing,
      },
    });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error creating book",
      error: error.message,
    });
  }
});


router.get("/", async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      where: {
        isDeleted: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error retrieving books",
      error: error.message,
    });
  }
});

export default router;