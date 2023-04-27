from fastapi import APIRouter, Depends, HTTPException
from typing import List, Union
from queries.comments import Error, CommentIn, CommentOut, CommentRepository

router = APIRouter()


@router.get("/comments", response_model=Union[List[CommentOut], Error])
def get_all_comments(
    repo: CommentRepository = Depends(),
):
    return repo.get_all()


@router.get("/comments/{comment_id}", response_model=CommentOut)
def get_one_comment(
    comment_id: int,
    repo: CommentRepository = Depends(),
) -> CommentOut:
    comment = repo.get_one(comment_id)
    if comment is None:
        raise HTTPException(status_code=404, detail="Comment not found")
    return comment


@router.post("/comments", response_model=Union[CommentOut, Error])
def create_comment(
    comment: CommentIn,
    repo: CommentRepository = Depends(),
):
    return repo.create(comment)


@router.put("/comments/{comment_id}", response_model=Union[CommentOut, Error])
def update_comment(
    comment_id: int,
    comment: CommentIn,
    repo: CommentRepository = Depends(),
) -> Union[Error, CommentRepository]:
    return repo.update(comment_id, comment)


@router.delete("/comments/{comment_id}", response_model=bool)
def delete_comment(
    comment_id: int,
    repo: CommentRepository = Depends(),
) -> bool:
    return repo.delete(comment_id)
