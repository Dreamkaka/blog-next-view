export default defineEventHandler(async event => {
	const { data } = useFetch('/api/user/create', {
    method: 'POST',
    body: {
      nickname: 'nickname',
      password: 'password'
    } catch (error) {
		return new Response(error as string, { status: 500 });
	}
  });
	// try {
		// return await new UserSchema(body).save();
//		return { code: 401, msg: 'reject' };
//	} catch (error) {
//		return new Response(error as string, { status: 500 });
//	}

