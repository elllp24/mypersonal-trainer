from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .database import SessionLocal
from .models import ClassModel, AttendanceModel
from .schemas import ClassCreate, AttendanceCreate

router = APIRouter()


# =========================
# DATABASE SESSION
# =========================

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# =========================
# CLASS APIs
# =========================

# CREATE CLASS
@router.post("/classes")
def create_class(
    data: ClassCreate,
    db: Session = Depends(get_db)
):

    new_class = ClassModel(
        name=data.name,
        trainer=data.trainer,
        time=data.time,
        members=data.members
    )

    db.add(new_class)
    db.commit()
    db.refresh(new_class)

    return new_class


# GET CLASSES
@router.get("/classes")
def get_classes(
    db: Session = Depends(get_db)
):

    return db.query(ClassModel).all()


# DELETE CLASS
@router.delete("/classes/{id}")
def delete_class(
    id: int,
    db: Session = Depends(get_db)
):

    item = db.query(ClassModel).filter(
        ClassModel.id == id
    ).first()

    if item:

        db.delete(item)
        db.commit()

    return {
        "message": "Class deleted"
    }


# UPDATE CLASS
@router.put("/classes/{id}")
def update_class(
    id: int,
    updated: ClassCreate,
    db: Session = Depends(get_db)
):

    item = db.query(ClassModel).filter(
        ClassModel.id == id
    ).first()

    if item:

        item.name = updated.name
        item.trainer = updated.trainer
        item.time = updated.time
        item.members = updated.members

        db.commit()
        db.refresh(item)

    return item


# =========================
# ATTENDANCE APIs
# =========================

# CREATE ATTENDANCE
@router.post("/attendance")
def create_attendance(
    data: AttendanceCreate,
    db: Session = Depends(get_db)
):

    new_attendance = AttendanceModel(
        member_name=data.member_name,
        class_name=data.class_name,
        status=data.status,
        date=data.date
    )

    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)

    return new_attendance


# GET ATTENDANCE
@router.get("/attendance")
def get_attendance(
    db: Session = Depends(get_db)
):

    return db.query(
        AttendanceModel
    ).all()


# DELETE ATTENDANCE
@router.delete("/attendance/{id}")
def delete_attendance(
    id: int,
    db: Session = Depends(get_db)
):

    item = db.query(AttendanceModel).filter(
        AttendanceModel.id == id
    ).first()

    if item:

        db.delete(item)
        db.commit()

    return {
        "message": "Attendance deleted"
    }


# UPDATE ATTENDANCE
@router.put("/attendance/{id}")
def update_attendance(
    id: int,
    updated: AttendanceCreate,
    db: Session = Depends(get_db)
):

    item = db.query(AttendanceModel).filter(
        AttendanceModel.id == id
    ).first()

    if item:

        item.member_name = updated.member_name
        item.class_name = updated.class_name
        item.status = updated.status
        item.date = updated.date

        db.commit()
        db.refresh(item)

    return item