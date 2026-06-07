from sqlalchemy import Column, Integer, String
from .database import Base


# =========================================================
# TRAINER MODEL
# =========================================================

class Trainer(Base):

    __tablename__ = "trainers"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    email = Column(String)
    phone = Column(String)
    specialization = Column(String)

    photo = Column(String)


# =========================================================
# MEMBER MODEL
# =========================================================

class Member(Base):

    __tablename__ = "members"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    email = Column(String)

    phone = Column(String)

    membership = Column(String)

    trainer = Column(String)

    photo = Column(String)


# =========================================================
# CLASS MODEL
# =========================================================

class ClassModel(Base):
    __tablename__ = "classes"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    trainer = Column(String)

    schedule = Column(String)

    description = Column(String)

    assigned_members = Column(String)


# =========================================================
# ATTENDANCE MODEL
# =========================================================

class AttendanceModel(Base):

    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)

    member_name = Column(String)
    class_name = Column(String)
    status = Column(String)
    date = Column(String)