from pydantic import BaseModel


class ClassCreate(BaseModel):
    name: str
    trainer: str
    time: str
    members: int


class AttendanceCreate(BaseModel):
    member_name: str
    class_name: str
    status: str
    date: str