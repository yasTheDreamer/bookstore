import pytest
from core import models


@pytest.mark.django_db
def test_user_create():
    user = models.User.objects.create(
        first_name="yassine",
        last_name="yousfi",
        user_name="yas",
        password="yas"
    )

    assert user.user_name == "yas"
    assert user.first_name == "yassine"

