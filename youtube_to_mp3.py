#! /usr/local/bin/python3

import sys
import youtube_dl
from mutagen.easyid3 import EasyID3

url=sys.argv[1]
title=sys.argv[2]
artist=sys.argv[3]

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
    result = ydl.extract_info("{}".format(url))
    filename = ydl.prepare_filename(result)[:-5] + '.mp3'
    metatag = EasyID3(filename)
    metatag['title'] = "{}".format(title)
    metatag['artist'] = "{}".format(artist)
    metatag.save()
