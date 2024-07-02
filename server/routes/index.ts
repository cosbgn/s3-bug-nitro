import { S3Client } from "@aws-sdk/client-s3";

export default eventHandler((event) => {
	const ACCOUNT_ID = ''
	const accessKeyId = ''
	const secretAccessKey = ''
	const s3Client = new S3Client({
			region: "auto",
			endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
			credentials: { accessKeyId, secretAccessKey}
	})
	return "This fails when deployed to cloudflare workers"
})
