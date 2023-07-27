/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives permissions to manage the scope to the provider's user. Marking this true makes for simpler HCL but results in role resources that are unmanaged by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope#auto_create_admin_role Scope#auto_create_admin_role}
  */
  readonly autoCreateAdminRole?: boolean | cdktf.IResolvable;
  /**
  * Only relevant when creating an org scope. If set, when a new scope is created, the provider will not disable the functionality that automatically creates a role in the new scope and gives listing of scopes and auth methods and the ability to authenticate to the anonymous user. Marking this true makes for simpler HCL but results in role resources that are unmanaged by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope#auto_create_default_role Scope#auto_create_default_role}
  */
  readonly autoCreateDefaultRole?: boolean | cdktf.IResolvable;
  /**
  * The scope description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope#description Scope#description}
  */
  readonly description?: string;
  /**
  * Indicates that the scope containing this value is the global scope, which triggers some specialized behavior to allow it to be imported and managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope#global_scope Scope#global_scope}
  */
  readonly globalScope?: boolean | cdktf.IResolvable;
  /**
  * The scope name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope#name Scope#name}
  */
  readonly name?: string;
  /**
  * The scope ID containing the sub scope resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope#scope_id Scope#scope_id}
  */
  readonly scopeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope boundary_scope}
*/
export class Scope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.1.9/docs/resources/scope boundary_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScopeConfig
  */
  public constructor(scope: Construct, id: string, config: ScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_scope',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.1.9',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateAdminRole = config.autoCreateAdminRole;
    this._autoCreateDefaultRole = config.autoCreateDefaultRole;
    this._description = config.description;
    this._globalScope = config.globalScope;
    this._name = config.name;
    this._scopeId = config.scopeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_admin_role - computed: false, optional: true, required: false
  private _autoCreateAdminRole?: boolean | cdktf.IResolvable; 
  public get autoCreateAdminRole() {
    return this.getBooleanAttribute('auto_create_admin_role');
  }
  public set autoCreateAdminRole(value: boolean | cdktf.IResolvable) {
    this._autoCreateAdminRole = value;
  }
  public resetAutoCreateAdminRole() {
    this._autoCreateAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateAdminRoleInput() {
    return this._autoCreateAdminRole;
  }

  // auto_create_default_role - computed: false, optional: true, required: false
  private _autoCreateDefaultRole?: boolean | cdktf.IResolvable; 
  public get autoCreateDefaultRole() {
    return this.getBooleanAttribute('auto_create_default_role');
  }
  public set autoCreateDefaultRole(value: boolean | cdktf.IResolvable) {
    this._autoCreateDefaultRole = value;
  }
  public resetAutoCreateDefaultRole() {
    this._autoCreateDefaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDefaultRoleInput() {
    return this._autoCreateDefaultRole;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // global_scope - computed: false, optional: true, required: false
  private _globalScope?: boolean | cdktf.IResolvable; 
  public get globalScope() {
    return this.getBooleanAttribute('global_scope');
  }
  public set globalScope(value: boolean | cdktf.IResolvable) {
    this._globalScope = value;
  }
  public resetGlobalScope() {
    this._globalScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalScopeInput() {
    return this._globalScope;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_admin_role: cdktf.booleanToTerraform(this._autoCreateAdminRole),
      auto_create_default_role: cdktf.booleanToTerraform(this._autoCreateDefaultRole),
      description: cdktf.stringToTerraform(this._description),
      global_scope: cdktf.booleanToTerraform(this._globalScope),
      name: cdktf.stringToTerraform(this._name),
      scope_id: cdktf.stringToTerraform(this._scopeId),
    };
  }
}
