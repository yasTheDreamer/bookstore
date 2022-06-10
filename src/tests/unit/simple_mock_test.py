import pytest
from pytest_mock import MockerFixture

from src.services.users.sum import using_sum


def test_simple_sum(mocker: MockerFixture):
    mocker.patch('src.services.users.sum.sum_example', return_value=2)

    assert using_sum() == 2
