"""Nightly cleanup: archives tasks marked done for more than 30 days."""
from datetime import datetime, timedelta


def is_stale(task, now=None):
    now = now or datetime.utcnow()
    return task["done"] and task["done_at"] < now - timedelta(days=30)
