# Configuring the Sale Index JSON

Before your sale will show up in the Tokensoft interface, we'll need some details about your team, a couple of logos, social media links, and at least one document--a purchase agreement--added to our sale index. At a high level, this will require you to perform a handful of steps:

1. [Fork this repo](https://github.com/tokensoft/launchlists/new/main#forking-this-repository) - Fork a copy of the tokensoft/launchlists repository
2. [Edit the JSON](https://github.com/tokensoft/launchlists/new/main#edit-the-sales-index-json) - Edit the `prod/sales_index.json` file (for production) or `staging/sales_index.json` file (for staging) to add your sale configuration
3. [Commit your changes](https://github.com/tokensoft/launchlists/new/main#save-and-commit-your-file-to-your-main-branch) - Committing your edits to your fork of the repository
4. [Open a PR](https://github.com/tokensoft/launchlists/new/main#open-a-pull-request-for-inclusion-in-the-tokensoft-repository) - Opening a pull request (PR) against the tokensoft/launchlists repository with your changes
5. [Ping the Team]() - Receiving merge approval from the Tokensoft team

## Forking this repository

1. Make sure you're on Tokensoft's launchlist repository by navigating to [tokensoft/launchlists](https://github.com/tokensoft/launchlists)
2. Click the fork button in the top right corner of the screen:

![fork button](https://user-images.githubusercontent.com/3208589/166805357-fc9658f3-3db3-466d-9389-d44e69dd40ab.png)


When this process is complete, you should get navigated to your personal copy of this repository. The URL for this copy will roughly follow the style `https://github.com/<YOUR_GITHUB_USERNAME>/launchlists`

## Edit the Sales Index JSON

1. Figure out which file you need to edit:
    * If you are making changes in our staging enviornment (`app.stagetokensoft.com`), edit [staging/sales_index.json](staging/sales_index.json)
    * If you are working on a production sale (`app.tokensoft.io`), add your details to [prod/sales_index.json](prod/sales_index.json)
2. Edit the file. This can be done through the Github interface by navigating to the proper file in Github and clicking the pencil icon. Alternatively, you can clone the repository locally using Git, but instructions on doing so are outside the scope of this document.
3. Add a new sale segment to the JSON file. An example structure that you can copy and paste in, with changes, is below:

```
  {
      "chainId": 1,
      "saleManagerAddress": "0xb2a2934de53c1dd6c330ee1db8ccb138a64837db",
      "saleId": "<SALE_ID_FROM_SETUP>",
      "saleName": "<SALE_NAME>",
      "logo": "<HTTPS_URL_TO_PNG>",
      "favicon": "<HTTPS_URL_TO_PNG>",
      "projectWebsite": "<YOUR_HTTPS_URL>",
      "saleDescription": "<SALE_DESCRIPTION>",
      "access": {
        "limitToRegions": ["US", "GB", "CA", "UK"],
      },
      "socials": {
        "twitter": "https://twitter.com/<TWITTER_HANDLE>",
        "discord": "https://discord.gg/<DISCORD_LINK>",
        "telegram": "https://t.me/<TELEGRAM_SLUG>"
      },
      "documents": [
        {
          "name": "Purchase Agreement",
          "uri": "https://example.com/qtz.pdf",
          "appendSignaturePageUri": "s3://job-queue-data/safts/annex.pdf"
        }
      ]
  },
```

Please edit the snippets that contain <> to update with your data. The saleId will be copyable from the sale maangement screen in the Tokensoft platform. Use the copy icon to the right of the Sale ID hash to copy it to your clipboard:

![Screen Shot 2022-05-04 at 15 35 38](https://user-images.githubusercontent.com/3208589/166812405-761a2a28-c04f-4378-9a10-608354762ce2.png)


## Save and commit your file to your main branch

1. Enter a descriptive title and some contact information into the commit screen:

![Screen Shot 2022-05-04 at 15 13 24](https://user-images.githubusercontent.com/3208589/166809003-7ccaacd5-01c4-4f7b-9220-4441beb2ecb8.png)

2. Commit the changes to your main branch

## Open a Pull Request for inclusion in the Tokensoft Repository

1. Navigate to your personal repository and fetch the upstream changes using the "Fetch and Merge" button:

![Screen Shot 2022-05-04 at 15 17 38](https://user-images.githubusercontent.com/3208589/166809956-22a3e670-76da-475d-a8e3-b48c2e0fcd2e.png)

2. Then open a pull request to request inclusion in the sale index:

![Screen Shot 2022-05-04 at 15 18 20](https://user-images.githubusercontent.com/3208589/166809777-47b35939-11ff-471f-8c7f-538145bea565.png)

## Connect with us!

Now that the pull request is open, a developer from our team will review the formatting, ensure that it will work as expected. If there are any issues, we will reach out and work through those with you. When everything looks good, we'll merge it, and your sale will show up on the site!
