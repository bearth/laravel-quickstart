<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class ApiController extends Controller
{
	public function getAllTasks(Request $request)
	{
		$tasks = Task::all();

		return response()->json([
      'data' => array("tasks" => $tasks)
    ]);
	}

	public function addTask(Request $request)
	{
		$task = new Task();
		$task->user_id = "1";
		$task->name = $request->input("name");
		$task->save();

		return response()->json([
			"id" => $task->id,
      "name" => $request->input("name")
    ]);
	}

	public function deleteTask(Request $request)
	{
		$task = Task::find($request->input("id"));
		$task->delete();

		return response()->json([
			"id" => $task->id
    ]);
	}
}
