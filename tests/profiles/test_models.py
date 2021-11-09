import pytest


def test_profile_str(profile):
    """Test the profile model string representation"""
    assert profile.__str__() == f"{profile.user.username}'s profile"
