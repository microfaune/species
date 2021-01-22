from django.db import models


##### API avec Django rest framework
class Bird(models.Model):
    latin_name = models.CharField(max_length=200)
    french_name = models.CharField(max_length=200)
    english_name = models.CharField(max_length=200)
    summary = models.TextField()
    source = models.CharField(max_length=80)

    def __str__(self):
        return self.french_name


class Picture(models.Model):
    bird = models.ForeignKey(Bird, related_name="pictures", on_delete=models.CASCADE)
    picture_file = models.ImageField()
    source = models.URLField(blank=True)

    def __str__(self):
        return str(self.picture_file)


class Audio(models.Model):
    bird = models.ForeignKey(Bird, related_name="audios", on_delete=models.CASCADE)
    audio_file = models.FileField()
    sound_type = models.CharField(max_length=200)
    source = models.URLField()
    sonogram = models.ImageField(blank=True)

    def __str__(self):
        return str(self.audio_file)


class Resource(models.Model):
    bird = models.ForeignKey(Bird, related_name="links", on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    url = models.URLField()
