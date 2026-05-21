from sqlalchemy import Column, Integer, String
from .database import Base


class ClassModel(Base):
    __tablename__ = "classes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    trainer = Column(String)
    time = Column(String)
    members = Column(Integer)


class AttendanceModel(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)
    member_name = Column(String)
    class_name = Column(String)
    status = Column(String)
    date = Column(String)