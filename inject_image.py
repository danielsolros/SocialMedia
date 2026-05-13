import os

# Read the Base64 data
with open('avatar_base64.txt', 'r') as f:
    b64_data = f.read().strip()

# Read the CSS file
with open('style.css', 'r') as f:
    css_content = f.read()

# Perform the replacement
old_url = "url('avatar.jpg')"
new_url = f"url('data:image/jpeg;base64,{b64_data}')"

if old_url in css_content:
    new_css = css_content.replace(old_url, new_url)
    # Write the updated CSS
    with open('style.css', 'w') as f:
        f.write(new_css)
    print("Injection successful.")
else:
    print("Pattern not found in style.css")
