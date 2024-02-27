#!/usr/bin/python3

# Import qbittorentapi and json libraries
# (be sure to pip install qbittorrentapi)!!
from qbittorrentapi import Client
import json

# Create a client to connect to the qbittorrent webui
client = Client(host='localhost:8080', username='user', password='pass')

 # Create an array for the final results
result = [];

# get all torrents
torrent_list = client.torrents_info(limit=15)

for torrent in torrent_list:
    # For each torrent in the list of retrieved files
    # add the name of the torrent to the result array
    result.append({
        "name": torrent.name
    });
else:
    # Parse the json
    json_object = json.dumps(result);
    
# Writing to additional-data.json
# By default this will create the file in the directory
# where the script is run
with open("additional-data.json", "w") as outfile:
    outfile.write(json_object)