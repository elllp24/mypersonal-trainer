from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .database import SessionLocal

from .models import (
    ClassModel,
    AttendanceModel,
    Trainer,
    Member
)

from .schemas import (
    ClassCreate,
    AttendanceCreate,
    TrainerCreate,
     MemberCreate
)

router = APIRouter()


# =========================================================
# DATABASE SESSION
# =========================================================

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# =========================================================
# TRAINER APIs
# =========================================================

# ADD TRAINER

@router.post("/trainers")
def add_trainer(
    data: TrainerCreate,
    db: Session = Depends(get_db)
):

    trainer = Trainer(

        name=data.name,
        email=data.email,
        phone=data.phone,
        specialization=data.specialization,
        photo=data.photo

    )

    db.add(trainer)

    db.commit()

    db.refresh(trainer)

    return trainer


# GET TRAINERS

@router.get("/trainers")
def get_trainers(
    db: Session = Depends(get_db)
):

    return db.query(Trainer).all()


# DELETE TRAINER

@router.delete("/trainers/{id}")
def delete_trainer(
    id: int,
    db: Session = Depends(get_db)
):

    trainer = db.query(Trainer).filter(
        Trainer.id == id
    ).first()

    if trainer:

        db.delete(trainer)

        db.commit()

    return {
        "message": "Trainer deleted"
    }


# UPDATE TRAINER

@router.put("/trainers/{id}")
def update_trainer(
    id: int,
    updated: TrainerCreate,
    db: Session = Depends(get_db)
):

    trainer = db.query(Trainer).filter(
        Trainer.id == id
    ).first()

    if trainer:

        trainer.name = updated.name
        trainer.email = updated.email
        trainer.phone = updated.phone
        trainer.specialization = updated.specialization
        trainer.photo = updated.photo

        db.commit()

        db.refresh(trainer)

    return trainer


# =========================================================
# MEMBER APIs
# =========================================================

# ADD MEMBER

@router.post("/members")
def add_member(
    data: MemberCreate,
    db: Session = Depends(get_db)
):

    member = Member(

        name=data.name,

        email=data.email,

        phone=data.phone,

        membership=data.membership,

        trainer=data.trainer,

        photo=data.photo
    )

    db.add(member)

    db.commit()

    db.refresh(member)

    return member


# GET MEMBERS

@router.get("/members")
def get_members(
    db: Session = Depends(get_db)
):

    return db.query(Member).all()


# DELETE MEMBER

@router.delete("/members/{id}")
def delete_member(
    id: int,
    db: Session = Depends(get_db)
):

    member = db.query(Member).filter(
        Member.id == id
    ).first()

    if member:

        db.delete(member)

        db.commit()

    return {
        "message": "Member deleted"
    }


# UPDATE MEMBER

@router.put("/members/{id}")
def update_member(
    id: int,
    updated: MemberCreate,
    db: Session = Depends(get_db)
):

    member = db.query(Member).filter(
        Member.id == id
    ).first()

    if member:

        member.name = updated.name

        member.email = updated.email

        member.phone = updated.phone

        member.membership = updated.membership

        member.trainer = updated.trainer

        member.photo = updated.photo

        db.commit()

        db.refresh(member)

    return member


# =========================================================
# CLASS APIs
# =========================================================

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


# =========================================================
# ATTENDANCE APIs
# =========================================================

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