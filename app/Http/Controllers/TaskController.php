<?php

namespace App\Http\Controllers;

use App\Models\task;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all tasks from the database
        $task = Task::all();
        return Inertia::render('HomePage', [
            'title' => "todo-app",
            'task' => $task
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $Task = new task();
        $Task->fill($request->all());
        $Task->save();
        return redirect('todoApp')->with('flash_message','task added!'); 
    }

    /**
     * Display the specified resource.
     */
    public function show(task $task)
    {
        // // Fetch all tasks from the database
        // $task = task::all();

        // // Return tasks as a JSON response
        // return response()->json($task);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $task = Task::find($id);
        if ($task) {
            $task->delete();
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false, 'message' => 'Task not found'], 404);
        }
    }


}
