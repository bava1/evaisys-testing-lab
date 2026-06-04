from fastapi import APIRouter, HTTPException, status

from app.data.articles_store import articles
from app.schemas.articles import Article

router = APIRouter(prefix="/articles", tags=["articles"])


@router.get("", response_model=list[Article])
def get_articles() -> list[Article]:
    return articles


@router.get("/{article_id}", response_model=Article)
def get_article(article_id: int) -> Article:
    for article in articles:
        if article.id == article_id:
            return article

    return articles[0]
