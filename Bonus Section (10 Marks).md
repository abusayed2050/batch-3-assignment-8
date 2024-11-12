## Bonus Section (10 Marks)

#### 1.Ques : Error Handling for Library System?

Ans : Success: Setting success to false is a clear and understand way to error API response

Status: The ststus code provides essential information that categorizes errors and this code conveys specific information about what went wrong

Message: The message provides a meaningful description of the error and easier to understand what went wrong

#### 1.Ques : Overdue Borrow List

Ans:Functionality: 1. Calculate overdue books based on the due date

```bash
  //find out total due date
  const currentDate = new Date();
  const dueDate = new Date(currentDate);
  dueDate.setDate(dueDate.getDate() - 14);

```

2. Provide a list of overdue items with borrower details.

```bash
  //calculate total over due Days and return
  const overdueBorrowBookList = result.map((data) => {
    const BorrowBookDays = currentDate.getTime() - data.borrowDate.getTime();
    const dayByBorrowBook = Math.floor(BorrowBookDays / (1000 * 60 * 60 * 24));
    const overdueDays = dayByBorrowBook - 14;

```

##### borrow.controllers.ts

```bash
const overDueBook = async (req: Request, res: Response) => {
  try {
    const result = await borrowBookServices.overDueBook(req.body);
    //compared over due days length and zero
    if (result.length > 0) {
      res.status(200).json({
        success: true,
        status: 200,
        message: "Overdue borrow list fetched",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        status: 200,
        message: "No overdue books",
        data: [],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "something went wrong",
      error: {
        name: err?.name,
        message: err?.message,
        stack: err?.stack,
      },
    });
  }
};

```

##### borrow.services.ts

```bash
const overDueBook = async (param: BorrowBookTypes) => {
  //find out total due date
  const currentDate = new Date();
  const dueDate = new Date(currentDate);
  dueDate.setDate(dueDate.getDate() - 14);

  const result = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: dueDate, //compare with book borrow date and due date
      },
    },
    include: {
      book: { select: { title: true } },
      Member: { select: { name: true } },
    },
  });

  //calculate total over due Days and return
  const overdueBorrowBookList = result.map((data) => {
    const BorrowBookDays = currentDate.getTime() - data.borrowDate.getTime();
    const dayByBorrowBook = Math.floor(BorrowBookDays / (1000 * 60 * 60 * 24));
    const overdueDays = dayByBorrowBook - 14;

    return {
      borrowId: data.borrowId,
      bookTitle: data.book.title,
      borrowerName: data.Member.name,
      overdueDays,
    };
  });
  return overdueBorrowBookList;
};

```
