import boto3

def handler(event, context):
    s3 = boto3.client('s3')
    objects = s3.list_objects(Bucket='clyde-serverless-photo-album-2023')
    photos = [obj['Key'] for obj in objects.get('Contents', [])]
    return {
        'statusCode': 200,
        'body': photos
    }
