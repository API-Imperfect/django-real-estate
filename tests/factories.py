import factory
from apps.profiles.models import Profile
from django.db.models.signals import post_save
from faker import Factory as FakerFactory
from real_estate.settings.base import AUTH_USER_MODEL

faker = FakerFactory.create()


@factory.django.mute_signals(post_save)
class ProfileFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory("tests.factories.UserFactory")
    phone_number = factory.LazyAttribute(lambda x: faker.phone_number())
    about_me = factory.LazyAttribute(lambda x: faker.sentence(nb_words=5))
    license = factory.LazyAttribute(lambda x: faker.text(max_nb_chars=6))
    profile_photo = factory.LazyAttribute(
        lambda x: faker.file_extension(category="image")
    )
    gender = factory.LazyAttribute(lambda x: f"other")
    country = factory.LazyAttribute(lambda x: faker.country_code())
    city = factory.LazyAttribute(lambda x: faker.city())
    is_buyer = False
    is_seller = False
    is_agent = False
    top_agent = False
    rating = factory.LazyAttribute(lambda x: faker.random_int(min=1, max=5))
    num_reviews = factory.LazyAttribute(lambda x: faker.random_int(min=0, max=25))

    class Meta:
        model = Profile


@factory.django.mute_signals(post_save)
class UserFactory(factory.django.DjangoModelFactory):
    first_name = factory.LazyAttribute(lambda x: faker.first_name())
    last_name = factory.LazyAttribute(lambda x: faker.last_name())
    username = factory.LazyAttribute(lambda x: faker.first_name())
    email = factory.LazyAttribute(lambda x: f"alpha@realestate.com")
    password = factory.LazyAttribute(lambda x: faker.password())
    is_active = True
    is_staff = False

    class Meta:
        model = AUTH_USER_MODEL

    @classmethod
    def _create(cls, model_class, *args, **kwargs):
        manager = cls._get_manager(model_class)
        if "is_superuser" in kwargs:
            return manager.create_superuser(*args, **kwargs)
        else:
            return manager.create_user(*args, **kwargs)
