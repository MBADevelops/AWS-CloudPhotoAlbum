# Importing the boto3 library, which is the AWS SDK for Python.
# This allows for making API requests to AWS directly from Python.
import boto3

# The main function that AWS Lambda will trigger.
def handler(event, context):
    # Initializing the S3 client using boto3.
    # This client provides a way to interact with the AWS S3 service.
    s3 = boto3.client('s3')

    # Listing objects (in this case, photos) from the specified S3 bucket.
    objects = s3.list_objects(Bucket='clyde-serverless-photo-album-2023')

    # Using a list comprehension to extract just the 'Key' of each object.
    # The 'Key' typically refers to the file name or the path of the file in the bucket.
    photos = [obj['Key'] for obj in objects.get('Contents', [])]

    # Returning a successful HTTP response with a status code of 200.
    # The body of the response contains the list of photo keys.
    return {
        'statusCode': 200,
        'body': photos
    }
