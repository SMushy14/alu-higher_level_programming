#!/usr/bin/python3
"""
This script fetches the status from a given URL using the urllib package.
"""
import urllib.request

def fetch_status(url):
     try:
        with urllib.request.urlopen(url) as response:
            html = response.read().decode('utf-8')
            return html
    except urllib.error.URLError as e:
        return "Error: {}".format(e.reason)

if __name__ == "__main__":
    url = "https://alu-intranet.hbtn.io/status"
    status = fetch_status(url)
    print("Body response:")
    print("\t- type: {}".format(type(status)))
    print("\t- content: {}".format(status))
