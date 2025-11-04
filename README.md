# Delete Asset From Other Environments

This plugin will look for extra copies of an asset across your other environments and allow you to easily delete them.

You should only use this if you need to clear an asset from our CDN altogether (datocms-assets.com).

After you delete the extra copies from your other environments, you also need to manually delete the final copy in the current environment. This last image cannot self-destruct, and must be manually deleted by you.

Then, once all copies are destroyed, the asset should disappear from the CDN within 24 hours.

---

You should NOT use this to find identical or visually similar copies of this image. It only checks for exact copies by their ID and does NOT do any sort of checksum lookup or perceptual hashing.

It is only meant for finding deduplicated copies of the exact same image ID across environments, for the purposes of being able to clear an image from our CDN cache.

---

Please make sure you have sufficient permissions for managing images across all your environments, and access to the environments themselves.

## Version History
* 0.0.1: Initial alpha release. Basic working functionality, but limited permissions and error checksing.