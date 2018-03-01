#! /usr/local/bin/python3

import sys
import youtube_dl
import mutagen
from mutagen.id3 import ID3, TPE1, ID3NoHeaderError
from mutagen.easyid3 import EasyID3

# title = sys.argv[2]
# artist = sys.argv[3]
# url = sys.argv[1]

class Track:

    def __init__(self, url, title, artist):
        self.url = url
        self.title = title
        self.artist = artist

f = open("./songs.txt", "r").read
words = f().split()
dlTrack = Track(words[0], words[1], words[2])
print(dlTrack.url)
print(dlTrack.title)
print(dlTrack.artist)


options = {
    'format':'bestaudio/best',
    'extractaudio':True,
    'audioformat':'mp3',
    'addmetadata':True,
    'outtmpl': u'%(title)s.%(ext)s',
    'noplaylist':True,
    'nocheckcertificate':True,
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }]
}

with youtube_dl.YoutubeDL(options) as ydl:
    result = ydl.extract_info("{}".format(dlTrack.url))
    filename = ydl.prepare_filename(result)
    if "youtube" in url:
        filename = ydl.prepare_filename(result)[:-5] + '.mp3'
    if "soundcloud" in url:
        filename = ydl.prepare_filename(result)
        metatag = mutagen.File(filename)
        metatag.add_tags()
        metatag.save(filename, v1=2)
    metatag = EasyID3(filename)
    metatag['title'] = "{}".format(dlTrack.title)
    metatag['artist'] = "{}".format(dlTrack.artist)
    metatag.save()
