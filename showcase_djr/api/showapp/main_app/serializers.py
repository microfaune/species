###### API with Django Rest Framework
from rest_framework import serializers
from .models import Bird, Audio, Picture, Resource


class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audio
        fields = (
            "audio_file",
            "sound_type",
            "source",
            "sonogram",
        )


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = (
            "picture_file",
            "source",
        )


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = (
            "title",
            "url",
        )


class BirdSerializer(serializers.ModelSerializer):
    pictures = PictureSerializer(many=True)
    audios = AudioSerializer(many=True)
    links = ResourceSerializer(many=True)

    class Meta:
        model = Bird
        fields = (
            "id",
            "latin_name",
            "french_name",
            "english_name",
            "summary",
            "source",
            "pictures",
            "audios",
            "links",
        )
