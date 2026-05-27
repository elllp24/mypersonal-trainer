from pydantic import BaseModel


# =========================================================
# TRAINER SCHEMA
# =========================================================

class TrainerCreate(BaseModel):

    name: str
    email: str
    phone: str
    specialization: str

    photo: str

# =========================================================
# MEMBER SCHEMA
# =========================================================

class MemberCreate(BaseModel):

    name: str

    email: str

    phone: str

    membership: str

    trainer: str

    photo: str


# =========================================================
# CLASS SCHEMA
# =========================================================

class ClassCreate(BaseModel):

    name: str
    trainer: str
    time: str
    members: int


# =========================================================
# ATTENDANCE SCHEMA
# =========================================================

class AttendanceCreate(BaseModel):

    member_name: str
    class_name: str
    status: str
    date: str