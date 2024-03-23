#!/usr/bin/python3
"""Fetches status from a given URL."""

import sys
import urllib.request
import urllib.error

def fetch_status(url):
    """
    Fetches the status from the given URL using urllib.

    Args:
        url (str): The URL to fetch the status from.

    Returns:
        str: The status retrieved from the URL.
    """
    try:
        request = urllib.request.Request(url)
        with urllib.request.urlopen(request) as response:
            body = response.read()
            return body.decode("utf-8")
    except urllib.error.URLError as e:
        return "Error: {}".format(e.reason)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        url = sys.argv[1]
    else:
        url = "https://alu-intranet.hbtn.io/status"

    status = fetch_status(url)
    print("Body response:")
    print("\t- type: {}".format(type(status)))
    print("\t- content: {}".format(status))
