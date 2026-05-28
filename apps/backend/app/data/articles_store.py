from app.schemas.articles import Article


articles: list[Article] = [
    Article(
        id=1,
        title="Smoke Testing Basics",
        category="testing",
        summary="Short article summary",
        content="Article content",
    ),
    Article(
        id=2,
        title="API Regression Checklist",
        category="qa",
        summary="Checklist for stable API regression runs",
        content="API regression content",
    ),
]
